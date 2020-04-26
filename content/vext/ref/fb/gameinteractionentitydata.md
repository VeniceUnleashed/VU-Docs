---
title: GameInteractionEntityData
---

Inherits from 
[InteractionEntityData](/vext/ref/fb/interactionentitydata)

## Summary
### Constructors
| |
| ----------- |
| **[GameInteractionEntityData](#constructor-0)**() |
| **[GameInteractionEntityData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[GameInteractionEntityData](#constructor-2)**(other: [InteractionEntityData](/vext/ref/fb/interactionentitydata)) |
| **[GameInteractionEntityData](#constructor-3)**(other: [GameEntityData](/vext/ref/fb/gameentitydata)) |
| **[GameInteractionEntityData](#constructor-4)**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata)) |
| **[GameInteractionEntityData](#constructor-5)**(other: [EntityData](/vext/ref/fb/entitydata)) |
| **[GameInteractionEntityData](#constructor-6)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[GameInteractionEntityData](#constructor-7)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[GameInteractionEntityData](#constructor-8)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "blink" >}} | [BlinkType](/vext/ref/fb/blinktype) |
| {{< prop "capturepointVerticalOffset" >}} | float |
| {{< prop "delayBetweenUses" >}} | float |
| {{< prop "teamId" >}} | [TeamId](/vext/ref/fb/teamid) |
| {{< prop "inputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "holdToInteractTime" >}} | float |
| {{< prop "interactionEntityType" >}} | [InteractionEntityType](/vext/ref/fb/interactionentitytype) |
| {{< prop "interactionSid" >}} | string |
| {{< prop "interactingSid" >}} | string |
| {{< prop "friendlyTextSid" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "interactionVerticalOffset" >}} | float |
| {{< prop "enemyTextSid" >}} | string |
| {{< prop "shrinkSnap" >}} | bool |
| {{< prop "showAsCapturePoint" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "GameInteractionEntityData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### GameInteractionEntityData {#constructor-0}
> **GameInteractionEntityData**()

Creates a new [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata) frostbite instance.

### GameInteractionEntityData {#constructor-1}
> **GameInteractionEntityData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### GameInteractionEntityData {#constructor-2}
> **GameInteractionEntityData**(other: [InteractionEntityData](/vext/ref/fb/interactionentitydata))

Casts an instance of type [InteractionEntityData](/vext/ref/fb/interactionentitydata) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [InteractionEntityData](/vext/ref/fb/interactionentitydata) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-3}
> **GameInteractionEntityData**(other: [GameEntityData](/vext/ref/fb/gameentitydata))

Casts an instance of type [GameEntityData](/vext/ref/fb/gameentitydata) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameEntityData](/vext/ref/fb/gameentitydata) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-4}
> **GameInteractionEntityData**(other: [SpatialEntityData](/vext/ref/fb/spatialentitydata))

Casts an instance of type [SpatialEntityData](/vext/ref/fb/spatialentitydata) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SpatialEntityData](/vext/ref/fb/spatialentitydata) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-5}
> **GameInteractionEntityData**(other: [EntityData](/vext/ref/fb/entitydata))

Casts an instance of type [EntityData](/vext/ref/fb/entitydata) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [EntityData](/vext/ref/fb/entitydata) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-6}
> **GameInteractionEntityData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-7}
> **GameInteractionEntityData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

### GameInteractionEntityData {#constructor-8}
> **GameInteractionEntityData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata). |

## Properties
### {{% prop-heading "blink" %}}
> **[BlinkType](/vext/ref/fb/blinktype)**

### {{% prop-heading "capturepointVerticalOffset" %}}
> **float**

### {{% prop-heading "delayBetweenUses" %}}
> **float**

### {{% prop-heading "teamId" %}}
> **[TeamId](/vext/ref/fb/teamid)**

### {{% prop-heading "inputAction" %}}
> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "holdToInteractTime" %}}
> **float**

### {{% prop-heading "interactionEntityType" %}}
> **[InteractionEntityType](/vext/ref/fb/interactionentitytype)**

### {{% prop-heading "interactionSid" %}}
> **string**

### {{% prop-heading "interactingSid" %}}
> **string**

### {{% prop-heading "friendlyTextSid" %}}
> **string**

### {{% prop-heading "nameSid" %}}
> **string**

### {{% prop-heading "interactionVerticalOffset" %}}
> **float**

### {{% prop-heading "enemyTextSid" %}}
> **string**

### {{% prop-heading "shrinkSnap" %}}
> **bool**

### {{% prop-heading "showAsCapturePoint" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [GameInteractionEntityData](/vext/ref/fb/gameinteractionentitydata) type.

