import './styles.scss';

function importAll(requireContext: __WebpackModuleApi.RequireContext) {
  return requireContext.keys().forEach(requireContext);
}

importAll(require.context('./components/', true, /\.[jt]s$/));
