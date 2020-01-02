---
title: UIInstallHDContentCompData
---
### Base Classes

[UIComponentData](UIComponentData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                           | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| UIInstallHDContentCompData()                                                          | Create a new instance of this container type.                                                                                               |
| UIInstallHDContentCompData(UIInstallHDContentCompData other)                          | Create a reference copy of an instance of the same type.                                                                                    |
| UIInstallHDContentCompData([UIComponentData](UIComponentData) other)                  | Upcast an instance of type [UIComponentData](UIComponentData) to [UIInstallHDContentCompData](UIInstallHDContentCompData).                  |
| UIInstallHDContentCompData([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [UIInstallHDContentCompData](UIInstallHDContentCompData).                                      |
| UIInstallHDContentCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInstallHDContentCompData](UIInstallHDContentCompData). |

## Methods

| Type                                                     | Name            | Parameters                                     |
| -------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UIInstallHDContentCompData](UIInstallHDContentCompData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInstallHDContentCompData](UIInstallHDContentCompData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
