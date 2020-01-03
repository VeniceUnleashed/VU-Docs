---
title: UI3dIconCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| UI3dIconCompData()                                                          | Create a new instance of this container type.                                                                           |
| UI3dIconCompData(UI3dIconCompData other)                                    | Create a reference copy of an instance of the same type.                                                                |
| UI3dIconCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/).                  |
| UI3dIconCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/).                                      |
| UI3dIconCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/). |

## Properties

| Name                       | Type                              | Description |
| -------------------------- | --------------------------------- | ----------- |
| pixelOffset                | [Vec2](/vext/ref/shared/class/vec2) |             |
| iconSize                   | number                            |             |
| maxFarFade                 | number                            |             |
| maxCloseFade               | number                            |             |
| snapSafeZone               | number                            |             |
| snapCenterYOffset          | number                            |             |
| shrinkSnapAnimationTime    | number                            |             |
| trackerHudRadiusX          | number                            |             |
| trackerHudRadiusY          | number                            |             |
| maxLookAtThreshold         | number                            |             |
| minLookAtThreshold         | number                            |             |
| minLookAtThresholdDistance | number                            |             |
| drawDistance               | number                            |             |
| fadeDistance               | number                            |             |
| fadeEndDistance            | number                            |             |
| minimumDrawDistance        | number                            |             |
| minimumFadeDistance        | number                            |             |
| maxTagUpdatesPerFrame      | number                            |             |
| verticalOffset             | number                            |             |
| showLabelRange             | number                            |             |
| teamRadioDistance          | number                            |             |
| scaleDistance              | number                            |             |
| maxScaleMod                | number                            |             |
| maxXRotation               | number                            |             |
| maxYRotation               | number                            |             |
| horisontalOffset           | number                            |             |
| showSupportAmmoThreshold   | number                            |             |
| verticalOffsetMaxOffset    | number                            |             |
| verticalOffsetScaleFactor  | number                            |             |
| showEngineerArmorThreshold | number                            |             |
| showMedicHealthThreshold   | number                            |             |
| snapIcons                  | bool                              |             |
| circularSnap               | bool                              |             |
| onlyShowSnapped            | bool                              |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UI3dIconCompData](/vext/ref/fb/ui3diconcompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
