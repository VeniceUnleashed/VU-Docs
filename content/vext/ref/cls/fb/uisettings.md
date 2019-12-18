---
title: UISettings (Frostbite Container)
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                           | Description                                                                                                 |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| UISettings()                                                          | Create a new instance of this container type.                                                               |
| UISettings(UISettings other)                                          | Create a reference copy of an instance of the same type.                                                    |
| UISettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [UISettings](UISettings).                    |
| UISettings([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UISettings](UISettings). |

## Properties

| Name              | Type                                       | Description |
| ----------------- | ------------------------------------------ | ----------- |
| system            | [UISystemType](UISystemType)               |             |
| bundles           | [UIBundlesAsset](UIBundlesAsset)           |             |
| profileOptions    | [ProfileOptionsAsset](ProfileOptionsAsset) |             |
| language          | [LanguageFormat](LanguageFormat)           |             |
| dataCop           | [DataCopSettings](DataCopSettings)         |             |
| oneBundlePerGraph | bool                                       |             |
| drawEnable        | bool                                       |             |

## Methods

| Type                     | Name            | Parameters                                     |
| ------------------------ | --------------- | ---------------------------------------------- |
| [UISettings](UISettings) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UISettings](UISettings) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
