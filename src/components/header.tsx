import { createSignal } from "solid-js";
import { A } from "solid-start";

const Header = () => {
  const [search, setSearch] = createSignal("");

  return (
    <header class="bg-white border-[1px] border-b-slate-300 p-2">
      <div class=" flex justify-between items-center mx-auto max-w-7xl">
        <div class="flex items-center space-x-4">
          <div>
            <A href="/">
              <img
                src="https://www.gramophone.com/sites/default/files/wysiwyg/brand-page-header-image.jpg"
                alt="logo"
                class="w-24"
              />
            </A>
          </div>
          <input
            class="border-[1px] border-slate-300 rounded-md p-2 outline-blue-600"
            type="text"
            value={search()}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <button class="border-[1px] border-blue-600 px-4 py-2 rounded-md text-blue-600 hover:bg-blue-600 hover:text-white">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
