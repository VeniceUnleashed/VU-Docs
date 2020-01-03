---
title: PathfindingBuildSettingsAsset
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                              | Description                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| PathfindingBuildSettingsAsset()                                                          | Create a new instance of this container type.                                                                                                     |
| PathfindingBuildSettingsAsset(PathfindingBuildSettingsAsset other)                       | Create a reference copy of an instance of the same type.                                                                                          |
| PathfindingBuildSettingsAsset([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset/).                                      |
| PathfindingBuildSettingsAsset([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset/). |

## Properties

| Name                             | Type   | Description |
| -------------------------------- | ------ | ----------- |
| entityRadius                     | number |             |
| entityHeight                     | number |             |
| maxWalkableSlope                 | number |             |
| maxStep                          | number |             |
| minIslandSurfaceArea             | number |             |
| voxSize                          | number |             |
| gridSideLength                   | number |             |
| additionalInwardsSmoothingDist   | number |             |
| terrainSamplingStep              | number |             |
| tesselateForPathingAccuracy      | bool   |             |
| useEnhancedTerrainTracking       | bool   |             |
| optimizeForAxisAligned           | bool   |             |
| leaveSmallIslandsTouchingPortals | bool   |             |

## Methods

| Type                                                           | Name            | Parameters                                     |
| -------------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
