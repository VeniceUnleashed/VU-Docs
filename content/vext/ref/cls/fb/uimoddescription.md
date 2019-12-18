---
title: UIModDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIModDescription()                                                          | Create a new instance of this container type.                                                                           |
| UIModDescription(UIModDescription other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIModDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIModDescription](UIModDescription).              |
| UIModDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UIModDescription](UIModDescription). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| shortName  | string |             |
| fullName   | string |             |
| desc       | string |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UIModDescription](UIModDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UIModDescription](UIModDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
