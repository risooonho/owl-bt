require('@fortawesome/fontawesome-free/js/fontawesome');
require('@fortawesome/fontawesome-free/js/solid');
require('@fortawesome/fontawesome-free/js/regular');
require('@fortawesome/fontawesome-free/js/brands');

require("jquery-mousewheel");
require('malihu-custom-scrollbar-plugin')($);// toto ($) robi problem pri start :( ale treba to pri teste)

require('angular');

require('angular-ui-bootstrap');
require('angular-cookies');
require('angular-resource');
require('angular-sanitize');
require('angular-route');
require('angular-hotkeys');
require('ng-scrollbars');
require('string_score');

require('./app/app.js')

require('./app/main/main.controller.js');
require('./app/main/main.js');
require('./app/tree/actions/SetTreeNodeItemBasePropertyValueAction.action.js');
require('./app/tree/actions/addTreeNodeItemAction.action.js');
require('./app/tree/actions/copyTreeNodeItem.action.js');
require('./app/tree/actions/moveTreeNode.action.js');
require('./app/tree/actions/moveTreeNodeSubItem.action.js');
require('./app/tree/actions/pasteTreeNodeItem.action.js');
require('./app/tree/actions/redoAction.action.js');
require('./app/tree/actions/removeTreeNode.action.js');
require('./app/tree/actions/removeTreeNodeSubItem.action.js');
require('./app/tree/actions/resetTreeNodeItemPropertyValue.action.js');
require('./app/tree/actions/saveTree.action.js');
require('./app/tree/actions/setTreeNodeItemPropertyValue.action.js');
require('./app/tree/actions/undoAction.action.js');
require('./app/tree/commandContextMenu/commandContextMenu.service.js');
require('./app/tree/commandContextMenu/commandContextMenuCfg.provider.js');
require('./app/tree/commandPalette/commandPalette.service.js');
require('./app/tree/commandPalette/commandPaletteCfg.provider.js');
require('./app/tree/commandTopMenu/commandTopMenu.controller.js');
require('./app/tree/commandTopMenu/commandTopMenuCfg.provider.js');
require('./app/tree/commands/addTreeNodeItem.command.js');
require('./app/tree/commands/copyTreeNodeItem.command.js');
require('./app/tree/commands/focusSelNode.command.js');
require('./app/tree/commands/moveTreeNode.command.js');
require('./app/tree/commands/moveTreeNodeSubItem.command.js');
require('./app/tree/commands/pasteTreeNodeItem.command.js');
require('./app/tree/commands/redo.command.js');
require('./app/tree/commands/removeTreeNodeItem.command.js');
require('./app/tree/commands/saveTree.command.js');
require('./app/tree/commands/selectItemAbove.command.js');
require('./app/tree/commands/selectItemBelow.command.js');
require('./app/tree/commands/selectSiblingNode.command.js');
require('./app/tree/commands/undo.command.js');
require('./app/tree/decoratorBasePropertyEditor/decoratorBasePropertyEditor.controller.js');
require('./app/tree/missingNodeItemDescValidation/missingNodeItemDescValidation.service.js');
require('./app/tree/projectStore/projectStore.service.js');
require('./app/tree/propertyEditor/boolParamEditor.directive.js');
require('./app/tree/propertyEditor/customPropertyEditor.directive.js');
require('./app/tree/propertyEditor/enumParamEditor.directive.js');
require('./app/tree/propertyEditor/formGroupParamEditor.directive.js');
require('./app/tree/propertyEditor/numberParamEditor.directive.js');
require('./app/tree/propertyEditor/propertyEditorList.directive.js');
require('./app/tree/propertyEditor/propertyReset.directive.js');
require('./app/tree/propertyEditor/propertyViewModelProvider.service.js');
require('./app/tree/propertyEditor/stringParamEditor.directive.js');
require('./app/tree/serviceBasePropertyEditor/serviceBasePropertyEditor.controller.js');
require('./app/tree/tree.controller.js');
require('./app/tree/tree.js');
require('./app/tree/treeItemDetails/treeItemDetails.directive.js');
require('./app/tree/treeItemPalette/treeItemPalette.directive.js');
require('./app/tree/treeItemPalette/treeItemPaletteGroup.directive.js');
require('./app/tree/treeModel/tree.service.js');
require('./app/tree/treeModel/treeDecoratorItemProvider.service.js');
require('./app/tree/treeModel/treeFocus.service.js');
require('./app/tree/treeModel/treeItemPropertyDtoConverter.service.js');
require('./app/tree/treeModel/treeNode.service.js');
require('./app/tree/treeModel/treeNodeByIdStore.service.js');
require('./app/tree/treeModel/treeNodeDtoConverter.service.js');
require('./app/tree/treeModel/treeNodeItem.service.js');
require('./app/tree/treeModel/treeNodeItemProperty.service.js');
require('./app/tree/treeModel/treeNodeProvider.service.js');
require('./app/tree/treeModel/treeSelection.service.js');
require('./app/tree/treeModel/treeServiceItemProvider.service.js');
require('./app/tree/treeModel/treeStore.service.js');
require('./app/tree/treeView/TreeViewModelProvider.service.js');
require('./app/tree/treeView/treeView.directive.js');
require('./app/tree/validators/propertyValidator.service.js');
require('./components/actionExecutor/actionExecutor.service.js');
require('./components/alertExceptionHandler/alertExceptionHandler.js');
require('./components/arrayHelper/arrayHelper.service.js');
require('./components/clipboard/clipboard.service.js');
require('./components/contextMenu/contextMenu.service.js');
require('./components/encodeURIComponent/encodeURIComponent.filter.js');
require('./components/fuzzyFilter/fuzzyFilter.service.js');
require('./components/idProvider/idProvider.service.js');
require('./components/listSelectDialog/fuzzyList/fuzzyList.directive.js');
require('./components/listSelectDialog/listSelectDialog.controller.js');
require('./components/listSelectDialog/listSelectDialog.service.js');
require('./components/matchHighlighter/matchHighlighter.service.js');
require('./components/msgPanel/alertList.service.js');
require('./components/msgPanel/alertPanel.directive.js');
require('./components/navbar/navbar.controller.js');
require('./components/sidePanel/sidePanel.directive.js');
require('./components/treeMruList/treeMruList.directive.js');
require('./components/treeMruList/treeMruList.service.js');
require('./components/undoRedoManager/undoRedoManager.service.js');