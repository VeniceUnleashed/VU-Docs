---
title: UIGenericItemDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIGenericItemDescription()                                                          | Create a new instance of this container type.                                                                                           |
| UIGenericItemDescription(UIGenericItemDescription other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIGenericItemDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIGenericItemDescription](UIGenericItemDescription).              |
| UIGenericItemDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIGenericItemDescription](UIGenericItemDescription). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| imagePath  | string |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGenericItemDescription](UIGenericItemDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIGenericItemDescription](UIGenericItemDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
