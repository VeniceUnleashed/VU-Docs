---
title: MaterialRelationPropertyPair
---


## Summary
### Constructors
| |
| ----------- |
| **[MaterialRelationPropertyPair](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "physicsMaterialProperties" >}} | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)[] |
| {{< prop "physicsPropertyProperties" >}} | [PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationPropertyPair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MaterialRelationPropertyPair {#constructor-0}
> **MaterialRelationPropertyPair**()

Creates a new [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) frostbite structure.

## Properties
### {{% prop-heading "physicsMaterialProperties" %}}
> **[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)**[]

### {{% prop-heading "physicsPropertyProperties" %}}
> **[PhysicsPropertyRelationPropertyData](/vext/ref/fb/physicspropertyrelationpropertydata)**[]

## Methods
### Clone
> **Clone**(): [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair) type.

