---
title: UILevelDescriptionComponent
---
### Base Classes

[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                               | Description                                                                                                                                      |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| UILevelDescriptionComponent()                                                             | Create a new instance of this container type.                                                                                                    |
| UILevelDescriptionComponent(UILevelDescriptionComponent other)                            | Create a reference copy of an instance of the same type.                                                                                         |
| UILevelDescriptionComponent([LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) other) | Upcast an instance of type [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent/) to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent/). |
| UILevelDescriptionComponent([DataContainer](/vext/ref/shared/class/datacontainer) other)    | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent/).    |

## Properties

| Name                 | Type                                 | Description |
| -------------------- | ------------------------------------ | ----------- |
| mpLoadingAssetPath   | string                               |             |
| loadingMusic         | [SoundAsset](/vext/ref/fb/soundasset/)             |             |
| loadingMusicPath     | string                               |             |
| levelImagePath       | string                               |             |
| loadingImagePath     | string                               |             |
| spLoadingAssetPath   | string                               |             |
| gpsPosition          | [UIGPSPosition](/vext/ref/fb/uigpsposition/)       |             |
| hintAsset            | [GameTipAsset](/vext/ref/fb/gametipasset/)         |             |
| creditsAssets        | [UICreditsAsset](/vext/ref/fb/uicreditsasset/)\[\] |             |
| minimapData          | [UIMinimapData](/vext/ref/fb/uiminimapdata/)       |             |
| levelCompledStatData | [UILevelStatData](/vext/ref/fb/uilevelstatdata/)   |             |
| levelScoreStatData   | [UILevelStatData](/vext/ref/fb/uilevelstatdata/)   |             |
| sortIndex            | number                               |             |
| isMenuLevel          | bool                                 |             |

## Methods

| Type                                                       | Name            | Parameters                                     |
| ---------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILevelDescriptionComponent](/vext/ref/fb/uileveldescriptioncomponent/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
