---
title: LicenseConfiguration
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| LicenseConfiguration()                                                          | Create a new instance of this container type.                                                                                   |
| LicenseConfiguration(LicenseConfiguration other)                                | Create a reference copy of an instance of the same type.                                                                        |
| LicenseConfiguration([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/).                                      |
| LicenseConfiguration([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/). |

## Properties

| Name     | Type                           | Description |
| -------- | ------------------------------ | ----------- |
| licenses | [LicenseInfo](/vext/ref/fb/licenseinfo/)\[\] |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [LicenseConfiguration](/vext/ref/fb/licenseconfiguration/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
