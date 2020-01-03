---
title: SplitterNode
---
### Base Classes

[UINodeData](/vext/ref/fb/uinodedata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SplitterNode()                                                          | Create a new instance of this container type.                                                                   |
| SplitterNode(SplitterNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SplitterNode([UINodeData](/vext/ref/fb/uinodedata/) other)                            | Upcast an instance of type [UINodeData](/vext/ref/fb/uinodedata/) to [SplitterNode](/vext/ref/fb/splitternode/).                            |
| SplitterNode([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SplitterNode](/vext/ref/fb/splitternode/). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| inValue | [UINodePort](/vext/ref/fb/uinodeport/)     |             |
| outputs | [UINodePort](/vext/ref/fb/uinodeport/)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SplitterNode](/vext/ref/fb/splitternode/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SplitterNode](/vext/ref/fb/splitternode/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
