---
title: UILevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](LevelDescriptionComponent)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                      |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| UILevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                    |
| UILevelDescriptionComponent(UILevelDescriptionComponent other)                            | Create a reference copy of an instance of the same type.                                                                                         |
| UILevelDescriptionComponent([LevelDescriptionComponent](LevelDescriptionComponent) other) | Upcast an instance of type [LevelDescriptionComponent](LevelDescriptionComponent) to [UILevelDescriptionComponent](UILevelDescriptionComponent). |
| UILevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILevelDescriptionComponent](UILevelDescriptionComponent).    |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| mpLoadingAssetPath   | string                               |             |
| loadingMusic         | [SoundAsset](SoundAsset)             |             |
| loadingMusicPath     | string                               |             |
| levelImagePath       | string                               |             |
| loadingImagePath     | string                               |             |
| spLoadingAssetPath   | string                               |             |
| gpsPosition          | [UIGPSPosition](UIGPSPosition)       |             |
| hintAsset            | [GameTipAsset](GameTipAsset)         |             |
| creditsAssets        | [UICreditsAsset](UICreditsAsset)\[\] |             |
| minimapData          | [UIMinimapData](UIMinimapData)       |             |
| levelCompledStatData | [UILevelStatData](UILevelStatData)   |             |
| levelScoreStatData   | [UILevelStatData](UILevelStatData)   |             |
| sortIndex            | number                               |             |
| isMenuLevel          | bool                                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelDescriptionComponent](UILevelDescriptionComponent) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILevelDescriptionComponent](UILevelDescriptionComponent) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
