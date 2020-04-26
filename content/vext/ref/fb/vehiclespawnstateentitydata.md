---
title: VehicleSpawnStateEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[VehicleSpawnStateEntityData](#constructor-0)**() |
| **[VehicleSpawnStateEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[VehicleSpawnStateEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[VehicleSpawnStateEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[VehicleSpawnStateEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[VehicleSpawnStateEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "initialVelocity" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "startupDelayModifier" >}} | float |
| {{< prop "initialThrottle" >}} | float |
| {{< prop "engineIndex" >}} | int |
| {{< prop "initialRpmModifier" >}} | float |
| {{< prop "heightOffset" >}} | float |
| {{< prop "radius" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "VehicleSpawnStateEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### VehicleSpawnStateEntityData {#constructor-0}
> **VehicleSpawnStateEntityData**()

Creates a new [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata) frostbite instance.

### VehicleSpawnStateEntityData {#constructor-1}
> **VehicleSpawnStateEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### VehicleSpawnStateEntityData {#constructor-2}
> **VehicleSpawnStateEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). |

### VehicleSpawnStateEntityData {#constructor-3}
> **VehicleSpawnStateEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). |

### VehicleSpawnStateEntityData {#constructor-4}
> **VehicleSpawnStateEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). |

### VehicleSpawnStateEntityData {#constructor-5}
> **VehicleSpawnStateEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata). |

## Properties
### {{% prop-heading "initialVelocity" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "startupDelayModifier" %}}
> **float**

### {{% prop-heading "initialThrottle" %}}
> **float**

### {{% prop-heading "engineIndex" %}}
> **int**

### {{% prop-heading "initialRpmModifier" %}}
> **float**

### {{% prop-heading "heightOffset" %}}
> **float**

### {{% prop-heading "radius" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [VehicleSpawnStateEntityData](/vext/ref/fb/vehiclespawnstateentitydata) type.

