---
title: InputRestrictionEntityData
---

Inherits from 
[GameEntityData](/vext/ref/fb/gameentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[InputRestrictionEntityData](#constructor-0)**() |
| **[InputRestrictionEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[InputRestrictionEntityData](#constructor-2)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[InputRestrictionEntityData](#constructor-3)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[InputRestrictionEntityData](#constructor-4)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[InputRestrictionEntityData](#constructor-5)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[InputRestrictionEntityData](#constructor-6)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[InputRestrictionEntityData](#constructor-7)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "applyRestrictionsToSpecificPlayer" >}} | bool |
| {{< prop "throttle" >}} | bool |
| {{< prop "strafe" >}} | bool |
| {{< prop "brake" >}} | bool |
| {{< prop "handBrake" >}} | bool |
| {{< prop "clutch" >}} | bool |
| {{< prop "yaw" >}} | bool |
| {{< prop "pitch" >}} | bool |
| {{< prop "roll" >}} | bool |
| {{< prop "fire" >}} | bool |
| {{< prop "fireCountermeasure" >}} | bool |
| {{< prop "altFire" >}} | bool |
| {{< prop "cycleRadioChannel" >}} | bool |
| {{< prop "selectMeleeWeapon" >}} | bool |
| {{< prop "zoom" >}} | bool |
| {{< prop "jump" >}} | bool |
| {{< prop "changeVehicle" >}} | bool |
| {{< prop "changeEntry" >}} | bool |
| {{< prop "changePose" >}} | bool |
| {{< prop "toggleParachute" >}} | bool |
| {{< prop "changeWeapon" >}} | bool |
| {{< prop "reload" >}} | bool |
| {{< prop "toggleCamera" >}} | bool |
| {{< prop "sprint" >}} | bool |
| {{< prop "scoreboardMenu" >}} | bool |
| {{< prop "mapZoom" >}} | bool |
| {{< prop "gearUp" >}} | bool |
| {{< prop "gearDown" >}} | bool |
| {{< prop "threeDimensionalMap" >}} | bool |
| {{< prop "giveOrder" >}} | bool |
| {{< prop "prone" >}} | bool |
| {{< prop "switchPrimaryInventory" >}} | bool |
| {{< prop "switchPrimaryWeapon" >}} | bool |
| {{< prop "grenadeLauncher" >}} | bool |
| {{< prop "staticGadget" >}} | bool |
| {{< prop "dynamicGadget1" >}} | bool |
| {{< prop "dynamicGadget2" >}} | bool |
| {{< prop "meleeAttack" >}} | bool |
| {{< prop "throwGrenade" >}} | bool |
| {{< prop "selectWeapon1" >}} | bool |
| {{< prop "selectWeapon2" >}} | bool |
| {{< prop "selectWeapon3" >}} | bool |
| {{< prop "selectWeapon4" >}} | bool |
| {{< prop "selectWeapon5" >}} | bool |
| {{< prop "selectWeapon6" >}} | bool |
| {{< prop "selectWeapon7" >}} | bool |
| {{< prop "selectWeapon8" >}} | bool |
| {{< prop "selectWeapon9" >}} | bool |
| {{< prop "overridePreviousInputRestriction" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "InputRestrictionEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### InputRestrictionEntityData {#constructor-0}
> **InputRestrictionEntityData**()

Creates a new [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata) frostbite instance.

### InputRestrictionEntityData {#constructor-1}
> **InputRestrictionEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### InputRestrictionEntityData {#constructor-2}
> **InputRestrictionEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

### InputRestrictionEntityData {#constructor-3}
> **InputRestrictionEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

### InputRestrictionEntityData {#constructor-4}
> **InputRestrictionEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

### InputRestrictionEntityData {#constructor-5}
> **InputRestrictionEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

### InputRestrictionEntityData {#constructor-6}
> **InputRestrictionEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

### InputRestrictionEntityData {#constructor-7}
> **InputRestrictionEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata). |

## Properties
### {{% prop-heading "applyRestrictionsToSpecificPlayer" %}}
> **bool**

### {{% prop-heading "throttle" %}}
> **bool**

### {{% prop-heading "strafe" %}}
> **bool**

### {{% prop-heading "brake" %}}
> **bool**

### {{% prop-heading "handBrake" %}}
> **bool**

### {{% prop-heading "clutch" %}}
> **bool**

### {{% prop-heading "yaw" %}}
> **bool**

### {{% prop-heading "pitch" %}}
> **bool**

### {{% prop-heading "roll" %}}
> **bool**

### {{% prop-heading "fire" %}}
> **bool**

### {{% prop-heading "fireCountermeasure" %}}
> **bool**

### {{% prop-heading "altFire" %}}
> **bool**

### {{% prop-heading "cycleRadioChannel" %}}
> **bool**

### {{% prop-heading "selectMeleeWeapon" %}}
> **bool**

### {{% prop-heading "zoom" %}}
> **bool**

### {{% prop-heading "jump" %}}
> **bool**

### {{% prop-heading "changeVehicle" %}}
> **bool**

### {{% prop-heading "changeEntry" %}}
> **bool**

### {{% prop-heading "changePose" %}}
> **bool**

### {{% prop-heading "toggleParachute" %}}
> **bool**

### {{% prop-heading "changeWeapon" %}}
> **bool**

### {{% prop-heading "reload" %}}
> **bool**

### {{% prop-heading "toggleCamera" %}}
> **bool**

### {{% prop-heading "sprint" %}}
> **bool**

### {{% prop-heading "scoreboardMenu" %}}
> **bool**

### {{% prop-heading "mapZoom" %}}
> **bool**

### {{% prop-heading "gearUp" %}}
> **bool**

### {{% prop-heading "gearDown" %}}
> **bool**

### {{% prop-heading "threeDimensionalMap" %}}
> **bool**

### {{% prop-heading "giveOrder" %}}
> **bool**

### {{% prop-heading "prone" %}}
> **bool**

### {{% prop-heading "switchPrimaryInventory" %}}
> **bool**

### {{% prop-heading "switchPrimaryWeapon" %}}
> **bool**

### {{% prop-heading "grenadeLauncher" %}}
> **bool**

### {{% prop-heading "staticGadget" %}}
> **bool**

### {{% prop-heading "dynamicGadget1" %}}
> **bool**

### {{% prop-heading "dynamicGadget2" %}}
> **bool**

### {{% prop-heading "meleeAttack" %}}
> **bool**

### {{% prop-heading "throwGrenade" %}}
> **bool**

### {{% prop-heading "selectWeapon1" %}}
> **bool**

### {{% prop-heading "selectWeapon2" %}}
> **bool**

### {{% prop-heading "selectWeapon3" %}}
> **bool**

### {{% prop-heading "selectWeapon4" %}}
> **bool**

### {{% prop-heading "selectWeapon5" %}}
> **bool**

### {{% prop-heading "selectWeapon6" %}}
> **bool**

### {{% prop-heading "selectWeapon7" %}}
> **bool**

### {{% prop-heading "selectWeapon8" %}}
> **bool**

### {{% prop-heading "selectWeapon9" %}}
> **bool**

### {{% prop-heading "overridePreviousInputRestriction" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [InputRestrictionEntityData](/vext/ref/fb/inputrestrictionentitydata) type.

