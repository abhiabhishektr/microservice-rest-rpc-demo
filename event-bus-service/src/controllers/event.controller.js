class EventController {
    handleEvent(req, res) {
      console.log('Event received:', req.body);
      res.status(200).json({ message: 'Event processed' });
    }
  }
  
  module.exports = new EventController();
  