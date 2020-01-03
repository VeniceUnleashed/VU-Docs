---
title: UIGunMasterCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIGunMasterCompData()                                                          | Create a new instance of this container type.                                                                                 |
| UIGunMasterCompData(UIGunMasterCompData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIGunMasterCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIGunMasterCompData](UIGunMasterCompData).                  |
| UIGunMasterCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIGunMasterCompData](UIGunMasterCompData).                                      |
| UIGunMasterCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIGunMasterCompData](UIGunMasterCompData). |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIGunMasterCompData](UIGunMasterCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIGunMasterCompData](UIGunMasterCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
