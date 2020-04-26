---
title: AnimatedDriverEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[AnimatedDriverEntityData](#constructor-0)**() |
| **[AnimatedDriverEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[AnimatedDriverEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[AnimatedDriverEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[AnimatedDriverEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[AnimatedDriverEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[AnimatedDriverEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[AnimatedDriverEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "inputTransform" >}} | [LinearTransform](/vext/ref/shared/class/lineartransform) |
| {{< prop "vehicleBoost" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleSpeed" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleMovementState" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleClutch" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "vehicleBrake" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "movementStateStandThreshold" >}} | float |
| {{< prop "yaw" >}} | [NormalizeSettings](/vext/ref/fb/normalizesettings) |
| {{< prop "roll" >}} | [NormalizeSettings](/vext/ref/fb/normalizesettings) |
| {{< prop "pitch" >}} | [NormalizeSettings](/vext/ref/fb/normalizesettings) |
| {{< prop "delayAnimationWheelTransform" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "AnimatedDriverEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### AnimatedDriverEntityData {#constructor-0}
> **AnimatedDriverEntityData**()

Creates a new [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata) frostbite instance.

### AnimatedDriverEntityData {#constructor-1}
> **AnimatedDriverEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### AnimatedDriverEntityData {#constructor-2}
> **AnimatedDriverEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

### AnimatedDriverEntityData {#constructor-3}
> **AnimatedDriverEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

### AnimatedDriverEntityData {#constructor-4}
> **AnimatedDriverEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

### AnimatedDriverEntityData {#constructor-5}
> **AnimatedDriverEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

### AnimatedDriverEntityData {#constructor-6}
> **AnimatedDriverEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

### AnimatedDriverEntityData {#constructor-7}
> **AnimatedDriverEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata). |

## Properties
### {{% prop-heading "inputTransform" %}}
> **[LinearTransform](/vext/ref/shared/class/lineartransform)**

### {{% prop-heading "vehicleBoost" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleSpeed" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleMovementState" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleClutch" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "vehicleBrake" %}}
> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "movementStateStandThreshold" %}}
> **float**

### {{% prop-heading "yaw" %}}
> **[NormalizeSettings](/vext/ref/fb/normalizesettings)**

### {{% prop-heading "roll" %}}
> **[NormalizeSettings](/vext/ref/fb/normalizesettings)**

### {{% prop-heading "pitch" %}}
> **[NormalizeSettings](/vext/ref/fb/normalizesettings)**

### {{% prop-heading "delayAnimationWheelTransform" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [AnimatedDriverEntityData](/vext/ref/fb/animateddriverentitydata) type.

