import { useState } from "react";
import InputOmnibar from "./components/InputOmnibar";
import { randomId } from "./lib/rand";
import Tile from "./components/Tile";

interface OmnibarProps {
  autoFocus?: boolean;
}

export default function Omnibar(props: OmnibarProps) {
  const [results, setResults] = useState([] as string[])

  async function onChange(query: string) {
    if (query.length > 0 && 'help'.startsWith(query)) {
      setResults(['Type "theme" to demonstrate the themes.']);
    } else if (query === 'theme') {
      setResults(['swap theme', 'set light theme', 'set dark theme', 'mytheme.com']);
    } else if (query === 'light') {
      setResults(['set light theme']);
    } else if (query === 'dark') {
      setResults(['set dark theme']);
    } else if (query === 'long') {
      const results = [];
      for (let i = 0; i < 100; ++i) {
        results.push('' + i);
      }
      setResults(results);
    } else {
      setResults([]);
    }
  }

  function swapTheme() {
    (window as any).swapTheme(); // TODO: Hacky
  }
  function setLightTheme() {
    (window as any).setTheme('light'); // TODO: Hacky
  }
  function setDarkTheme() {
    (window as any).setTheme('dark'); // TODO: Hacky
  }

  function isCommandTile(result: string) {
    return result === 'swap theme' || result === 'set light theme' || result === 'set dark theme';
  }

  function makeTileContent(result: string) {
    if (result === 'swap theme') {
      return <button onClick={swapTheme}>
        {result}
      </button>
    }
    if (result === 'set light theme') {
      return <button onClick={setLightTheme}>
        {result}
      </button>
    }
    if (result === 'set dark theme') {
      return <button onClick={setDarkTheme}>
        {result}
      </button>
    }
    return <>
      {result}
    </>
  }
  const tiles = results.map((result) => <div key={randomId()} className="pt-1">
    <Tile commandTile={isCommandTile(result)}>
      {makeTileContent(result)}
    </Tile>
  </div>);

  return <div className="p-1.5">
    <InputOmnibar autoFocus={props.autoFocus} onChange={onChange}/>
    <div>
      {tiles}
    </div>
  </div>
}
