interface SQLDriver {
    public function connect();
    public function query($query);
}




class MySQL implements SQLDriver {
    public function connect()
    {
        // connecting to a mysql database
    }

    public function query($query)
    {
        echo $query;
        // query to a mysql database
    }
}


class SQLServer implements SQLDriver {
    public function connect()
    {
        // connecting to a sqlServer database
    }


    public function query($query)
    {
        // query to a sqlServer database
    }
}





class DatabaseConsumer {
    private $provider;

    public function __construct(SQLDriver $sqlDriver)
    {
        $this->provider = $sqlDriver;
        $this->provider->connect();
    }

    public function query($query) {
        $this->provider->query($query);
    }
}

$dc = new DatabaseConsumer(new MySQL());
$dc->query("SELECT * FROM `posts`");