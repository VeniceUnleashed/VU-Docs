---
title: ComparisonLogicNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ComparisonLogicNode()                                                          | Create a new instance of this container type.                                                                                 |
| ComparisonLogicNode(ComparisonLogicNode other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ComparisonLogicNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode/).                            |
| ComparisonLogicNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode/). |

## Properties

| Name            | Type                                 | Description |
| --------------- | ------------------------------------ | ----------- |
| inValue         | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| outputs         | [UINodePort](/vext/ref/fb/uinodeport/)\[\]         |             |
| dataSourceInfo  | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |
| skipFractionals | bool                                 |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ComparisonLogicNode](/vext/ref/fb/comparisonlogicnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
