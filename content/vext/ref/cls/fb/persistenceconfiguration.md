---
title: PersistenceConfiguration (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                         | Description                                                                                                                             |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| PersistenceConfiguration()                                                          | Create a new instance of this container type.                                                                                           |
| PersistenceConfiguration(PersistenceConfiguration other)                            | Create a reference copy of an instance of the same type.                                                                                |
| PersistenceConfiguration([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PersistenceConfiguration](PersistenceConfiguration).                                      |
| PersistenceConfiguration([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [PersistenceConfiguration](PersistenceConfiguration). |

## Properties

| Name                       | Type                                                     | Description |
| -------------------------- | -------------------------------------------------------- | ----------- |
| statCategoryTreeCollection | [StatCategoryTreeCollection](StatCategoryTreeCollection) |             |
| mpProfile                  | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| spProfile                  | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| coopProfile                | [PlayerTypeProfile](PlayerTypeProfile)                   |             |
| pointSystemParams          | [PointSystemParamsAsset](PointSystemParamsAsset)         |             |
| licenseConfig              | [LicenseConfiguration](LicenseConfiguration)             |             |

## Methods

| Type                                                 | Name            | Parameters                                     |
| ---------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PersistenceConfiguration](PersistenceConfiguration) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [PersistenceConfiguration](PersistenceConfiguration) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
