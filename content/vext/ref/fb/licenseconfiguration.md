---
title: LicenseConfiguration
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LicenseConfiguration()                                                          | Create a new instance of this container type.                                                                                   |
| LicenseConfiguration(LicenseConfiguration other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LicenseConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [LicenseConfiguration](LicenseConfiguration).                                      |
| LicenseConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LicenseConfiguration](LicenseConfiguration). |

## Properties

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| licenses | [LicenseInfo](LicenseInfo)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LicenseConfiguration](LicenseConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LicenseConfiguration](LicenseConfiguration) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
