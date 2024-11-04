app.post("/api/login", upload.single("profilImage"), async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the image file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
  
    // Convert image to .webp format and save it
    const webpFileName = `${Date.now()}.webp`; // Generate a new file name
    const outputPath = path.join("uploads/profiles", webpFileName); // Define output path
  
    try {
      // Use sharp to convert and save the image
      await sharp(req.file.buffer)
        .webp({ quality: 80 }) // Set quality as needed
        .toFile(outputPath);
  
      // Get the file path to save in the database
      const profilImage = outputPath;
      console.log(profilImage);
  
      if (email && password) {
        // Save to the database
        await db.addStudent(email, password, profilImage);
  
        // Add to Excel file
        const filePath = "./users.xlsx";
        let workbook;
        let worksheet;
  
        try {
          // Attempt to read the existing Excel file
          workbook = xlsx.readFile(filePath);
          worksheet = workbook.Sheets["Users"];
        } catch (error) {
          // If file does not exist, create a new workbook and worksheet with headers
          console.log("Creating a new Excel file");
          workbook = xlsx.utils.book_new();
          worksheet = xlsx.utils.aoa_to_sheet([["Email", "Password", "Profile Image"]]); // Header row
          xlsx.utils.book_append_sheet(workbook, worksheet, "Users");
        }
  
        // Add new row to the worksheet
        const newRow = [email, password, profilImage];
        xlsx.utils.sheet_add_aoa(worksheet, [newRow], { origin: -1 });
  
        // Write updated workbook to file
        xlsx.writeFile(workbook, filePath);
  
        res.json({ message: "User data stored in database and Excel" });
      } else {
        res.status(400).json({ message: "Invalid request" });
      }
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });