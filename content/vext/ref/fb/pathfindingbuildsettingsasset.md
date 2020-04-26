---
title: PathfindingBuildSettingsAsset
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PathfindingBuildSettingsAsset](#constructor-0)**() |
| **[PathfindingBuildSettingsAsset](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PathfindingBuildSettingsAsset](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PathfindingBuildSettingsAsset](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "entityRadius" >}} | float |
| {{< prop "entityHeight" >}} | float |
| {{< prop "maxWalkableSlope" >}} | float |
| {{< prop "maxStep" >}} | float |
| {{< prop "minIslandSurfaceArea" >}} | float |
| {{< prop "voxSize" >}} | float |
| {{< prop "gridSideLength" >}} | float |
| {{< prop "additionalInwardsSmoothingDist" >}} | float |
| {{< prop "terrainSamplingStep" >}} | int |
| {{< prop "tesselateForPathingAccuracy" >}} | bool |
| {{< prop "useEnhancedTerrainTracking" >}} | bool |
| {{< prop "optimizeForAxisAligned" >}} | bool |
| {{< prop "leaveSmallIslandsTouchingPortals" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PathfindingBuildSettingsAsset" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PathfindingBuildSettingsAsset {#constructor-0}

> **PathfindingBuildSettingsAsset**()

Creates a new [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset) frostbite instance.

### PathfindingBuildSettingsAsset {#constructor-1}

> **PathfindingBuildSettingsAsset**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PathfindingBuildSettingsAsset {#constructor-2}

> **PathfindingBuildSettingsAsset**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset). |

### PathfindingBuildSettingsAsset {#constructor-3}

> **PathfindingBuildSettingsAsset**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset). |

## Properties

### {{% prop-heading "entityRadius" %}}

> **float**

### {{% prop-heading "entityHeight" %}}

> **float**

### {{% prop-heading "maxWalkableSlope" %}}

> **float**

### {{% prop-heading "maxStep" %}}

> **float**

### {{% prop-heading "minIslandSurfaceArea" %}}

> **float**

### {{% prop-heading "voxSize" %}}

> **float**

### {{% prop-heading "gridSideLength" %}}

> **float**

### {{% prop-heading "additionalInwardsSmoothingDist" %}}

> **float**

### {{% prop-heading "terrainSamplingStep" %}}

> **int**

### {{% prop-heading "tesselateForPathingAccuracy" %}}

> **bool**

### {{% prop-heading "useEnhancedTerrainTracking" %}}

> **bool**

### {{% prop-heading "optimizeForAxisAligned" %}}

> **bool**

### {{% prop-heading "leaveSmallIslandsTouchingPortals" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PathfindingBuildSettingsAsset](/vext/ref/fb/pathfindingbuildsettingsasset) type.

