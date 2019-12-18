---
title: SplitterNode (Frostbite Container)
---
### Base Classes

[UINodeData](UINodeData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                             | Description                                                                                                     |
| ----------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| SplitterNode()                                                          | Create a new instance of this container type.                                                                   |
| SplitterNode(SplitterNode other)                                        | Create a reference copy of an instance of the same type.                                                        |
| SplitterNode([UINodeData](UINodeData) other)                            | Upcast an instance of type [UINodeData](UINodeData) to [SplitterNode](SplitterNode).                            |
| SplitterNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SplitterNode](SplitterNode). |

## Properties

| Name    | Type                         | Description |
| ------- | ---------------------------- | ----------- |
| inValue | [UINodePort](UINodePort)     |             |
| outputs | [UINodePort](UINodePort)\[\] |             |

## Methods

| Type                         | Name            | Parameters                                     |
| ---------------------------- | --------------- | ---------------------------------------------- |
| [SplitterNode](SplitterNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SplitterNode](SplitterNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
