---
title: UIGenericItemDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| UIGenericItemDescription()                                                          | Create a new instance of this container type.                                                                                           |
| UIGenericItemDescription(UIGenericItemDescription other)                            | Create a reference copy of an instance of the same type.                                                                                |
| UIGenericItemDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription/).              |
| UIGenericItemDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription/). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| imagePath  | string |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGenericItemDescription](/vext/ref/fb/uigenericitemdescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
