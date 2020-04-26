---
title: SpatialEntityData
---

Inherits from 
[EntityData](/vext/ref/fb/entitydata)

## Summary
### Constructors
| |
| ----------- |
| **[SpatialEntityData](#constructor-0)**() |
| **[SpatialEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SpatialEntityData](#constructor-2)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[SpatialEntityData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpatialEntityData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpatialEntityData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpatialEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpatialEntityData {#constructor-0}
> **SpatialEntityData**()

Creates a new [SpatialEntityData](/vext/ref/fb/spatialentitydata) frostbite instance.

### SpatialEntityData {#constructor-1}
> **SpatialEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SpatialEntityData](/vext/ref/fb/spatialentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SpatialEntityData {#constructor-2}
> **SpatialEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [SpatialEntityData](/vext/ref/fb/spatialentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [SpatialEntityData](/vext/ref/fb/spatialentitydata). |

### SpatialEntityData {#constructor-3}
> **SpatialEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpatialEntityData](/vext/ref/fb/spatialentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpatialEntityData](/vext/ref/fb/spatialentitydata). |

### SpatialEntityData {#constructor-4}
> **SpatialEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpatialEntityData](/vext/ref/fb/spatialentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpatialEntityData](/vext/ref/fb/spatialentitydata). |

### SpatialEntityData {#constructor-5}
> **SpatialEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpatialEntityData](/vext/ref/fb/spatialentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SpatialEntityData](/vext/ref/fb/spatialentitydata). |

## Properties
### {{% prop-heading "transform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpatialEntityData](/vext/ref/fb/spatialentitydata) type.

