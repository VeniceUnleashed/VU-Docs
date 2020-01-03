---
title: UIModDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UIModDescription()                                                          | Create a new instance of this container type.                                                                           |
| UIModDescription(UIModDescription other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UIModDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIModDescription](/vext/ref/fb/uimoddescription/).              |
| UIModDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIModDescription](/vext/ref/fb/uimoddescription/). |

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
| [UIModDescription](/vext/ref/fb/uimoddescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIModDescription](/vext/ref/fb/uimoddescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
