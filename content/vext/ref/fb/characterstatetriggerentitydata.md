---
title: CharacterStateTriggerEntityData
---

Inherits from 
[TriggerEntityData](/vext/ref/fb/triggerentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[CharacterStateTriggerEntityData](#constructor-0)**() |
| **[CharacterStateTriggerEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[CharacterStateTriggerEntityData](#constructor-2)**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata)) |
| **[CharacterStateTriggerEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[CharacterStateTriggerEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[CharacterStateTriggerEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[CharacterStateTriggerEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[CharacterStateTriggerEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[CharacterStateTriggerEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "activeWeaponSlot" >}} | int |
| {{< prop "pitch" >}} | float |
| {{< prop "characterPose" >}} | [CharacterPoseAction](/vext/ref/fb/characterposeaction) |
| {{< prop "ammoToSet" >}} | int |
| {{< prop "poseToCheck" >}} | [CharacterPoseAction](/vext/ref/fb/characterposeaction) |
| {{< prop "weapon" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "healthToSet" >}} | int |
| {{< prop "healthToCheck" >}} | int |
| {{< prop "seatIndex" >}} | int |
| {{< prop "excludeConnectedVehicles" >}} | bool |
| {{< prop "continueToCheckIfHoldingWrongWeapon" >}} | bool |
| {{< prop "stayInVehicleOnMove" >}} | bool |
| {{< prop "checkHealthGreaterOrEqual" >}} | bool |
| {{< prop "checkAllWeapons" >}} | bool |
| {{< prop "shouldCheckSeatIndex" >}} | bool |
| {{< prop "useExitPointWhenLeavingVehicle" >}} | bool |
| {{< prop "disablePhysicsWhenLeavingVehicle" >}} | bool |
| {{< prop "usePitch" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "CharacterStateTriggerEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### CharacterStateTriggerEntityData {#constructor-0}
> **CharacterStateTriggerEntityData**()

Creates a new [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata) frostbite instance.

### CharacterStateTriggerEntityData {#constructor-1}
> **CharacterStateTriggerEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### CharacterStateTriggerEntityData {#constructor-2}
> **CharacterStateTriggerEntityData**(other: [TriggerEntityData](/vext/ref/fb/triggerentitydata))

Casts an instance of type [TriggerEntityData](/vext/ref/fb/triggerentitydata) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TriggerEntityData](/vext/ref/fb/triggerentitydata) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-3}
> **CharacterStateTriggerEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-4}
> **CharacterStateTriggerEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-5}
> **CharacterStateTriggerEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-6}
> **CharacterStateTriggerEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-7}
> **CharacterStateTriggerEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

### CharacterStateTriggerEntityData {#constructor-8}
> **CharacterStateTriggerEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata). |

## Properties
### {{% prop-heading "activeWeaponSlot" %}}
> **int**

### {{% prop-heading "pitch" %}}
> **float**

### {{% prop-heading "characterPose" %}}
> **[CharacterPoseAction](/vext/ref/fb/characterposeaction)**

### {{% prop-heading "ammoToSet" %}}
> **int**

### {{% prop-heading "poseToCheck" %}}
> **[CharacterPoseAction](/vext/ref/fb/characterposeaction)**

### {{% prop-heading "weapon" %}}
> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** | **nil**

### {{% prop-heading "healthToSet" %}}
> **int**

### {{% prop-heading "healthToCheck" %}}
> **int**

### {{% prop-heading "seatIndex" %}}
> **int**

### {{% prop-heading "excludeConnectedVehicles" %}}
> **bool**

### {{% prop-heading "continueToCheckIfHoldingWrongWeapon" %}}
> **bool**

### {{% prop-heading "stayInVehicleOnMove" %}}
> **bool**

### {{% prop-heading "checkHealthGreaterOrEqual" %}}
> **bool**

### {{% prop-heading "checkAllWeapons" %}}
> **bool**

### {{% prop-heading "shouldCheckSeatIndex" %}}
> **bool**

### {{% prop-heading "useExitPointWhenLeavingVehicle" %}}
> **bool**

### {{% prop-heading "disablePhysicsWhenLeavingVehicle" %}}
> **bool**

### {{% prop-heading "usePitch" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [CharacterStateTriggerEntityData](/vext/ref/fb/characterstatetriggerentitydata) type.

