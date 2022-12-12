exports.s3upload = (req, res) => {
  // res.status(200).json( { file: req.files, body: req.body } );

    let image = [];
  
    if (req.files.length > 0) {
        image = req.files.map((file) => {
        return { img: file.location };
      });
    }
  
    const file = new file({
      image,
    });
  
    file.save((error, file) => {
      if (error) return res.status(400).json({ error });
      if (file) {
        res.status(201).json({ file, files: req.files });
      }
    });
  };
  