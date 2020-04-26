---
title: MaterialRelationDamageData
---

Inherits from 
[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)

## Summary
### Constructors
| |
| ----------- |
| **[MaterialRelationDamageData](#constructor-0)**() |
| **[MaterialRelationDamageData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MaterialRelationDamageData](#constructor-2)**(other: [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)) |
| **[MaterialRelationDamageData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialRelationDamageData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "collisionDamageMultiplier" >}} | float |
| {{< prop "collisionDamageThreshold" >}} | float |
| {{< prop "damageProtectionMultiplier" >}} | float |
| {{< prop "damagePenetrationMultiplier" >}} | float |
| {{< prop "damageProtectionThreshold" >}} | float |
| {{< prop "explosionCoverDamageModifier" >}} | float |
| {{< prop "inflictsDemolitionDamage" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationDamageData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MaterialRelationDamageData {#constructor-0}
> **MaterialRelationDamageData**()

Creates a new [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata) frostbite instance.

### MaterialRelationDamageData {#constructor-1}
> **MaterialRelationDamageData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MaterialRelationDamageData {#constructor-2}
> **MaterialRelationDamageData**(other: [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata))

Casts an instance of type [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata) | The instance to cast to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). |

### MaterialRelationDamageData {#constructor-3}
> **MaterialRelationDamageData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). |

### MaterialRelationDamageData {#constructor-4}
> **MaterialRelationDamageData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata). |

## Properties
### {{% prop-heading "collisionDamageMultiplier" %}}
> **float**

### {{% prop-heading "collisionDamageThreshold" %}}
> **float**

### {{% prop-heading "damageProtectionMultiplier" %}}
> **float**

### {{% prop-heading "damagePenetrationMultiplier" %}}
> **float**

### {{% prop-heading "damageProtectionThreshold" %}}
> **float**

### {{% prop-heading "explosionCoverDamageModifier" %}}
> **float**

### {{% prop-heading "inflictsDemolitionDamage" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MaterialRelationDamageData](/vext/ref/fb/materialrelationdamagedata) type.

