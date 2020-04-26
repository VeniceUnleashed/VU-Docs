---
title: SpecialMovesComponentData
---

Inherits from 
[ComponentData](/vext/ref/fb/componentdata)

## Summary
### Constructors
| |
| ----------- |
| **[SpecialMovesComponentData](#constructor-0)**() |
| **[SpecialMovesComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SpecialMovesComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[SpecialMovesComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SpecialMovesComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SpecialMovesComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "vaultOverHighState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "vaultUpHighState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "vaultOverLowState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "sprintToProneState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "deathState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "specialAnimationState" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata) |
| {{< prop "indexedDeathStates" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)[] |
| {{< prop "indexedSpecialAnimationStates" >}} | [SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)[] |
| {{< prop "indexedVaultOverHighStates" >}} | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)[] |
| {{< prop "indexedVaultUpStates" >}} | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)[] |
| {{< prop "indexedVaultOverLowStates" >}} | [SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)[] |
| {{< prop "binding" >}} | [SpecialMovesBinding](/vext/ref/fb/specialmovesbinding) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SpecialMovesComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SpecialMovesComponentData {#constructor-0}
> **SpecialMovesComponentData**()

Creates a new [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata) frostbite instance.

### SpecialMovesComponentData {#constructor-1}
> **SpecialMovesComponentData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SpecialMovesComponentData {#constructor-2}
> **SpecialMovesComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). |

### SpecialMovesComponentData {#constructor-3}
> **SpecialMovesComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). |

### SpecialMovesComponentData {#constructor-4}
> **SpecialMovesComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). |

### SpecialMovesComponentData {#constructor-5}
> **SpecialMovesComponentData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata). |

## Properties
### {{% prop-heading "vaultOverHighState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "vaultUpHighState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "vaultOverLowState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "sprintToProneState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "deathState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "specialAnimationState" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**

### {{% prop-heading "indexedDeathStates" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**[]

### {{% prop-heading "indexedSpecialAnimationStates" %}}
> **[SpecialMoveStateData](/vext/ref/fb/specialmovestatedata)**[]

### {{% prop-heading "indexedVaultOverHighStates" %}}
> **[SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)**[]

### {{% prop-heading "indexedVaultUpStates" %}}
> **[SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)**[]

### {{% prop-heading "indexedVaultOverLowStates" %}}
> **[SpecialMoveVaultStateCriteria](/vext/ref/fb/specialmovevaultstatecriteria)**[]

### {{% prop-heading "binding" %}}
> **[SpecialMovesBinding](/vext/ref/fb/specialmovesbinding)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SpecialMovesComponentData](/vext/ref/fb/specialmovescomponentdata) type.

