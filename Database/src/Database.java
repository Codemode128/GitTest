import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
class Database
{
	public static final Logger logger = LogManager.getLogger(Database.class);
	public static void main(String[] args)
	{
		logger.info("This is an Information message");
		logger.debug("This is a debug message");
		logger.error("This is an error message");
		logger.trace("This is a trace message");
		logger.warn("This is a warn message");
	}
}