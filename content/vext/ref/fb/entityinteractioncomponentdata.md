---
title: EntityInteractionComponentData
---

Inherits from [ComponentData](/vext/ref/fb/componentdata)

## Summary

### Constructors

|  |
| --- |
| **[EntityInteractionComponentData](#constructor-0)**() |
| **[EntityInteractionComponentData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[EntityInteractionComponentData](#constructor-2)**(other: [ComponentData](/vext/ref/fb/componentdata)) |
| **[EntityInteractionComponentData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[EntityInteractionComponentData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[EntityInteractionComponentData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "pickupRadius" >}} | float |
| {{< prop "maxAmmoPickupTimer" >}} | float |
| {{< prop "maxAmmoCrateTimer" >}} | float |
| {{< prop "interactWithTypes" >}} | [InteractionTypesData](/vext/ref/fb/interactiontypesdata) |
| {{< prop "maxLookAtAngle" >}} | float |
| {{< prop "soldierInteractRadius" >}} | float |
| {{< prop "soldierInteractInputAction" >}} | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum) |
| {{< prop "allowInteractionWithSoldiers" >}} | bool |
| {{< prop "onlyAllowInteractionWithManDownSoldiers" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EntityInteractionComponentData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EntityInteractionComponentData {#constructor-0}

> **EntityInteractionComponentData**()

Creates a new [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata) frostbite instance.

### EntityInteractionComponentData {#constructor-1}

> **EntityInteractionComponentData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### EntityInteractionComponentData {#constructor-2}

> **EntityInteractionComponentData**(other: [ComponentData](/vext/ref/fb/componentdata))

Casts an instance of type [ComponentData](/vext/ref/fb/componentdata) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ComponentData](/vext/ref/fb/componentdata) | The instance to cast to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). |

### EntityInteractionComponentData {#constructor-3}

> **EntityInteractionComponentData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). |

### EntityInteractionComponentData {#constructor-4}

> **EntityInteractionComponentData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). |

### EntityInteractionComponentData {#constructor-5}

> **EntityInteractionComponentData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata). |

## Properties

### {{% prop-heading "pickupRadius" %}}

> **float**

### {{% prop-heading "maxAmmoPickupTimer" %}}

> **float**

### {{% prop-heading "maxAmmoCrateTimer" %}}

> **float**

### {{% prop-heading "interactWithTypes" %}}

> **[InteractionTypesData](/vext/ref/fb/interactiontypesdata)**

### {{% prop-heading "maxLookAtAngle" %}}

> **float**

### {{% prop-heading "soldierInteractRadius" %}}

> **float**

### {{% prop-heading "soldierInteractInputAction" %}}

> **[EntryInputActionEnum](/vext/ref/fb/entryinputactionenum)**

### {{% prop-heading "allowInteractionWithSoldiers" %}}

> **bool**

### {{% prop-heading "onlyAllowInteractionWithManDownSoldiers" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EntityInteractionComponentData](/vext/ref/fb/entityinteractioncomponentdata) type.

