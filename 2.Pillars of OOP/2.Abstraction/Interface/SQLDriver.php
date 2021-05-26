بهترین روش پیاده‌سازی اتصال به پایگاه داده در هر برنامه روشی است که وابسته به نوع پایگاه داده و نوع پیاده‌سازی اتصال به آن نباشد. 

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