---
title: UILevelLocationDescription
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UILevelLocationDescription()                                                          | Create a new instance of this container type.                                                                                               |
| UILevelLocationDescription(UILevelLocationDescription other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UILevelLocationDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UILevelLocationDescription](UILevelLocationDescription).              |
| UILevelLocationDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILevelLocationDescription](UILevelLocationDescription). |

## Properties

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| name        | string |             |
| description | string |             |
| texturePath | string |             |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelLocationDescription](UILevelLocationDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILevelLocationDescription](UILevelLocationDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
