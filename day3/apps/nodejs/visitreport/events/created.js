var messageBus, logger;

function handle(visitreport) {
    var message = {
        body: visitreport,
        contentType: 'application/json',
        userProperties: {
            type: 'visitreport',
            subtype: 'VisitReportAddedEvent',
            version: '1'
        }
    };
    messageBus.topic.send(message);
    logger.info('created_event');
}

function init(mb, log) {
    messageBus = mb;
    logger = log;
}

module.exports = {
    handler: handle,
    initialize: init
}