class QueryController {
    async aggregateData(req, res, next) {
      // Implement logic to aggregate data from other services
      res.status(200).json({ message: 'Data aggregated' });
    }
  }
  
  module.exports = new QueryController();
  