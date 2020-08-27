import './styles.scss';

function importAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().forEach(requireContext);
}

importAll(require.context('./components/', true, /(?<!\.test)\.[jt]s$/)); // takes each js and ts file except ones with "test" suffix
