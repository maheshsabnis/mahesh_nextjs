import { Manufacturer } from "../models/manufacturer";
import { Product } from "../models/products";

export class Database {
    private  Manufacturers:Array<Manufacturer> = new Array<Manufacturer>();

    private Products:Array<Product> = new Array<Product>();

    getManufacturers():Array<Manufacturer> {
        this.Manufacturers.push(new Manufacturer(101, 'MS-HP', 12345,'Pune'));
        this.Manufacturers.push(new Manufacturer(102, 'MS-ASUS', 22345,'Mumbai'));
        this.Manufacturers.push(new Manufacturer(103, 'MS-Lenovo', 32345,'Bangalore'));
        this.Manufacturers.push(new Manufacturer(104, 'MS-Accer', 42345,'Chennai'));
        this.Manufacturers.push(new Manufacturer(105, 'MS-Apple', 52345,'Hyderabad'));
        this.Manufacturers.push(new Manufacturer(106, 'MS-Toshiba', 62345,'Surat'));
        return this.Manufacturers;
    }

    getProducts():Array<Product> {
        this.Products.push(new Product(2001,'Laptop','32-GB Gaming', 120000, 101));
        this.Products.push(new Product(2002,'Printer','Lazer Printer', 1200000, 102));
        this.Products.push(new Product(2003,'RAM','64 GB DDR6', 220000, 103));
        this.Products.push(new Product(2004,'SSD','5-TB Duel', 240000, 104));
        this.Products.push(new Product(2005,'Laptop','128-GB Server', 220000, 105));
        this.Products.push(new Product(2006,'HDD','10-TB Fast', 20000, 106));
        this.Products.push(new Product(2007,'Router','100Gbps Fast', 20000, 101));
        this.Products.push(new Product(2008,'Printer','DMP Fast', 120000, 102));
        this.Products.push(new Product(2009,'Monitor','Full HD 56 Inches', 32000, 103));
        this.Products.push(new Product(2010,'Desktop','4 TB SSD 32 GB RAM', 80000, 104));
        this.Products.push(new Product(2011,'Adapter','250 Watt', 2000, 105));
        this.Products.push(new Product(2012,'RAM','32-GB DDR4', 12000, 106));
        this.Products.push(new Product(2013,'Laptop','1 TB RAM Server', 420000, 101));
        this.Products.push(new Product(2014,'Printer','Laser Printer', 3000, 102));
        this.Products.push(new Product(2015,'SSD','10 TB Srever Storage', 40000, 103));
        this.Products.push(new Product(2016,'HDD','1 TB USB', 20000, 104));
        this.Products.push(new Product(2017,'Router','10 mbps Line Connector', 6000, 105));
        this.Products.push(new Product(2018,'Printer','Duel Xerox and Printer and Fax', 5000, 106));
        this.Products.push(new Product(2019,'SSD','1 TB Smart Drive', 12000, 101));
        this.Products.push(new Product(2020,'RAM','128 GB DDR10 Srever Memory', 22000, 102));
        this.Products.push(new Product(2021,'Monitor','16 Inches UHD', 12000, 103));
        this.Products.push(new Product(2022,'HDD','20 TB Storage', 42000, 104));
        this.Products.push(new Product(2023,'Desktop','Designer Desktop with 2 TB Storage and 128 GB RAM', 32000, 105));
        this.Products.push(new Product(2024,'Hyper-Drive','10 Connector Fast', 32000, 106));
        return this.Products;
    }

}