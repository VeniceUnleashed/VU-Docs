---
title: MaterialRelationDecalData
---

Inherits from 
[PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)

## Summary
### Constructors
| |
| ----------- |
| **[MaterialRelationDecalData](#constructor-0)**() |
| **[MaterialRelationDecalData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[MaterialRelationDecalData](#constructor-2)**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata)) |
| **[MaterialRelationDecalData](#constructor-3)**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata)) |
| **[MaterialRelationDecalData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "decal" >}} | [DecalTemplateData](/vext/ref/fb/decaltemplatedata) \| nil |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MaterialRelationDecalData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MaterialRelationDecalData {#constructor-0}
> **MaterialRelationDecalData**()

Creates a new [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata) frostbite instance.

### MaterialRelationDecalData {#constructor-1}
> **MaterialRelationDecalData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### MaterialRelationDecalData {#constructor-2}
> **MaterialRelationDecalData**(other: [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata))

Casts an instance of type [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [PhysicsMaterialRelationPropertyData](/vext/ref/fb/physicsmaterialrelationpropertydata) | The instance to cast to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). |

### MaterialRelationDecalData {#constructor-3}
> **MaterialRelationDecalData**(other: [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata))

Casts an instance of type [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [MaterialRelationPropertyData](/vext/ref/fb/materialrelationpropertydata) | The instance to cast to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). |

### MaterialRelationDecalData {#constructor-4}
> **MaterialRelationDecalData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata). |

## Properties
### {{% prop-heading "decal" %}}
> **[DecalTemplateData](/vext/ref/fb/decaltemplatedata)** | **nil**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MaterialRelationDecalData](/vext/ref/fb/materialrelationdecaldata) type.

