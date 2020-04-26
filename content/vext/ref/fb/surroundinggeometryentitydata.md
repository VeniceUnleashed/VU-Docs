---
title: SurroundingGeometryEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SurroundingGeometryEntityData](#constructor-0)**() |
| **[SurroundingGeometryEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SurroundingGeometryEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[SurroundingGeometryEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[SurroundingGeometryEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SurroundingGeometryEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SurroundingGeometryEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SurroundingGeometryEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "allowedVehicleList" >}} | [AllowedVehiclesData](/vext/ref/fb/allowedvehiclesdata) \| nil |
| {{< prop "combatArea" >}} | [CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata) \| nil |
| {{< prop "combatAreaIndex" >}} | int |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SurroundingGeometryEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SurroundingGeometryEntityData {#constructor-0}
> **SurroundingGeometryEntityData**()

Creates a new [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata) frostbite instance.

### SurroundingGeometryEntityData {#constructor-1}
> **SurroundingGeometryEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SurroundingGeometryEntityData {#constructor-2}
> **SurroundingGeometryEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

### SurroundingGeometryEntityData {#constructor-3}
> **SurroundingGeometryEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

### SurroundingGeometryEntityData {#constructor-4}
> **SurroundingGeometryEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

### SurroundingGeometryEntityData {#constructor-5}
> **SurroundingGeometryEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

### SurroundingGeometryEntityData {#constructor-6}
> **SurroundingGeometryEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

### SurroundingGeometryEntityData {#constructor-7}
> **SurroundingGeometryEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata). |

## Properties
### {{% prop-heading "allowedVehicleList" %}}
> **[AllowedVehiclesData](/vext/ref/fb/allowedvehiclesdata)** | **nil**

### {{% prop-heading "combatArea" %}}
> **[CombatAreaTriggerEntityData](/vext/ref/fb/combatareatriggerentitydata)** | **nil**

### {{% prop-heading "combatAreaIndex" %}}
> **int**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SurroundingGeometryEntityData](/vext/ref/fb/surroundinggeometryentitydata) type.

