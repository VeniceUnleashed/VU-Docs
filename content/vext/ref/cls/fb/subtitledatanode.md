---
title: SubtitleDataNode (Frostbite Container)
---
### Base Classes

[TreeNodeBase](TreeNodeBase)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SubtitleDataNode()                                                          | Create a new instance of this container type.                                                                           |
| SubtitleDataNode(SubtitleDataNode other)                                    | Create a reference copy of an instance of the same type.                                                                |
| SubtitleDataNode([TreeNodeBase](TreeNodeBase) other)                        | Upcast an instance of type [TreeNodeBase](TreeNodeBase) to [SubtitleDataNode](SubtitleDataNode).                        |
| SubtitleDataNode([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SubtitleDataNode](SubtitleDataNode). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| time        | number |             |
| displayTime | number |             |
| siD1        | string |             |
| siD2        | string |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [SubtitleDataNode](SubtitleDataNode) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SubtitleDataNode](SubtitleDataNode) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
