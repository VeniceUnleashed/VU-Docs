---
title: ConceptCache
---
## Description

## Constructors

| Constructor                                                                                                  | Description                                              |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- |
| [ConceptCache](/vext/ref/client/class/conceptcache)()                                                          |                                                          |
| [ConceptCache](/vext/ref/client/class/conceptcache)([ConceptCache](/vext/ref/client/class/conceptcache) **ref**) | Create a reference copy of an instance of the same type. |

## Operators

| Operator | Parameters                                                                     |
| -------- | ------------------------------------------------------------------------------ |
| \[\]     | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **key** |

## Methods

| Type  | Name                  | Parameters                                                                                             |
| ----- | --------------------- | ------------------------------------------------------------------------------------------------------ |
| float | [GetLevel](#getlevel) | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**                  |
| void  | [SetLevel](#setlevel) | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**, float **level** |

### GetLevel

> float **GetLevel**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |

### SetLevel

> void **SetLevel**([InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) **identifier**, float **level**)

#### Parameters

| Name       | Type                                                                   | Description |
| ---------- | ---------------------------------------------------------------------- | ----------- |
| identifier | [InputConceptIdentifiers](/vext/ref/fb/inputconceptidentifiers) |             |
| level      | float                                                                  |             |
