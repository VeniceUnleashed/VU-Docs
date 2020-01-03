---
title: BinaryLogicNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| BinaryLogicNode()                                                          | Create a new instance of this container type.                                                                         |
| BinaryLogicNode(BinaryLogicNode other)                                     | Create a reference copy of an instance of the same type.                                                              |
| BinaryLogicNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [BinaryLogicNode](/vext/ref/fb/binarylogicnode/).                            |
| BinaryLogicNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BinaryLogicNode](/vext/ref/fb/binarylogicnode/). |

## Properties

| Name           | Type                                 | Description |
| -------------- | ------------------------------------ | ----------- |
| inValue        | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| trueValue      | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| falseValue     | [UINodePort](/vext/ref/fb/uinodeport/)             |             |
| dataSourceInfo | [UIDataSourceInfo](/vext/ref/fb/uidatasourceinfo/) |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [BinaryLogicNode](/vext/ref/fb/binarylogicnode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BinaryLogicNode](/vext/ref/fb/binarylogicnode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
