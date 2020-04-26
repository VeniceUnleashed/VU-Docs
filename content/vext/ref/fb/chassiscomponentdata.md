---
title: ChassisComponentData
---

Inherits from 
[PartComponentData](/vext/ref/fb/partcomponentdata)

## Summary
### Constructors
| |
| ----------- |
| **[ChassisComponentData](#constructor-0)**() |
| **[ChassisComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[ChassisComponentData](#constructor-2)**(other: [PartComponentData](/vext/ref/fb/partcomponentdata)) |
| **[ChassisComponentData](#constructor-3)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[ChassisComponentData](#constructor-4)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[ChassisComponentData](#constructor-5)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[ChassisComponentData](#constructor-6)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vehicleConfig" >}} | [VehicleConfigData](/vext/ref/fb/vehicleconfigdata) \| nil |
| {{< prop "gearboxConfig" >}} | [GearboxConfigData](/vext/ref/fb/gearboxconfigdata) \| nil |
| {{< prop "waterStreakEffects" >}} | [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata)[] |
| {{< prop "waterEffects" >}} | [VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata)[] |
| {{< prop "triggerGroundEffectImpulse" >}} | float |
| {{< prop "landingGearLogic" >}} | [LandingGearLogicData](/vext/ref/fb/landinggearlogicdata) \| nil |
| {{< prop "alwaysFullThrottle" >}} | bool |
| {{< prop "forceLandingGearsRetract" >}} | bool |
| {{< prop "allowNegativeThrottle" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ChassisComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ChassisComponentData {#constructor-0}
> **ChassisComponentData**()

Creates a new [ChassisComponentData](/vext/ref/fb/chassiscomponentdata) frostbite instance.

### ChassisComponentData {#constructor-1}
> **ChassisComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [ChassisComponentData](/vext/ref/fb/chassiscomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### ChassisComponentData {#constructor-2}
> **ChassisComponentData**(other: [PartComponentData](/vext/ref/fb/partcomponentdata))

Casts an instance of type [PartComponentData](/vext/ref/fb/partcomponentdata) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PartComponentData](/vext/ref/fb/partcomponentdata) | The instance to cast to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). |

### ChassisComponentData {#constructor-3}
> **ChassisComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). |

### ChassisComponentData {#constructor-4}
> **ChassisComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). |

### ChassisComponentData {#constructor-5}
> **ChassisComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). |

### ChassisComponentData {#constructor-6}
> **ChassisComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [ChassisComponentData](/vext/ref/fb/chassiscomponentdata). |

## Properties
### {{% prop-heading "vehicleConfig" %}}
> **[VehicleConfigData](/vext/ref/fb/vehicleconfigdata)** | **nil**

### {{% prop-heading "gearboxConfig" %}}
> **[GearboxConfigData](/vext/ref/fb/gearboxconfigdata)** | **nil**

### {{% prop-heading "waterStreakEffects" %}}
> **[VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata)**[]

### {{% prop-heading "waterEffects" %}}
> **[VehicleWaterEffectData](/vext/ref/fb/vehiclewatereffectdata)**[]

### {{% prop-heading "triggerGroundEffectImpulse" %}}
> **float**

### {{% prop-heading "landingGearLogic" %}}
> **[LandingGearLogicData](/vext/ref/fb/landinggearlogicdata)** | **nil**

### {{% prop-heading "alwaysFullThrottle" %}}
> **bool**

### {{% prop-heading "forceLandingGearsRetract" %}}
> **bool**

### {{% prop-heading "allowNegativeThrottle" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ChassisComponentData](/vext/ref/fb/chassiscomponentdata) type.

