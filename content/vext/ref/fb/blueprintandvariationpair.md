---
title: BlueprintAndVariationPair
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                          | Description                                                                                                                               |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| BlueprintAndVariationPair()                                                          | Create a new instance of this container type.                                                                                             |
| BlueprintAndVariationPair(BlueprintAndVariationPair other)                           | Create a reference copy of an instance of the same type.                                                                                  |
| BlueprintAndVariationPair([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair/).                                      |
| BlueprintAndVariationPair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair/). |

## Properties

| Name      | Type                               | Description |
| --------- | ---------------------------------- | ----------- |
| baseAsset | [Asset](/vext/ref/fb/asset/)                     |             |
| variation | [ObjectVariation](/vext/ref/fb/objectvariation/) |             |

## Methods

| Type                                                   | Name            | Parameters                                     |
| ------------------------------------------------------ | --------------- | ---------------------------------------------- |
| [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BlueprintAndVariationPair](/vext/ref/fb/blueprintandvariationpair/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
