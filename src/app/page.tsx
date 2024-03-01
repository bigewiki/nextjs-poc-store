import Link from "next/link";
import dummProductData from "./dummy-data/dummy-products.json";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-row flex-wrap w-full">
        {dummProductData.products.map(
          ({ alt, name, description, price, slug }, index) => (
            <div
              key={index}
              className="p-10 xl:w-1/4 lg:w-1/3 lg:w-1/2 xs:w-full"
            >
              <Link href={`/product/${slug}`} legacyBehavior>
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
                      alt={alt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {name}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {description}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </main>
  );
}
