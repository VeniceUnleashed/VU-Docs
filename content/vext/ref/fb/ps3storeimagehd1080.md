---
title: PS3StoreImageHD1080
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| PS3StoreImageHD1080()                                                          | Create a new instance of this container type.                                                                                 |
| PS3StoreImageHD1080(PS3StoreImageHD1080 other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| PS3StoreImageHD1080([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [PS3StoreImageHD1080](PS3StoreImageHD1080).              |
| PS3StoreImageHD1080([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PS3StoreImageHD1080](PS3StoreImageHD1080). |

## Properties

| Name       | Type   | Description |
| ---------- | ------ | ----------- |
| identifier | string |             |
| imagePath  | string |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [PS3StoreImageHD1080](PS3StoreImageHD1080) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PS3StoreImageHD1080](PS3StoreImageHD1080) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
