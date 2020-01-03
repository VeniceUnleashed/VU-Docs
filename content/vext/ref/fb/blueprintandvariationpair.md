---
title: BlueprintAndVariationPair
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintAndVariationPair()                                                          | Create a new instance of this container type.                                                                                             |
| BlueprintAndVariationPair(BlueprintAndVariationPair other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| BlueprintAndVariationPair([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [BlueprintAndVariationPair](BlueprintAndVariationPair).                                      |
| BlueprintAndVariationPair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintAndVariationPair](BlueprintAndVariationPair). |

## Properties

| Name      | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| baseAsset | [Asset](Asset)                     |             |
| variation | [ObjectVariation](ObjectVariation) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlueprintAndVariationPair](BlueprintAndVariationPair) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintAndVariationPair](BlueprintAndVariationPair) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
